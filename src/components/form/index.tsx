import React, {
  SyntheticEvent,
  ChangeEvent,
  FormHTMLAttributes,
  useState,
  useMemo,
  useContext,
} from 'react';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import { StyledForm } from './styles';

import { LoadingContext } from '../../context/LoadingContext';

import Input from './input';
import TextArea from './textarea';
import api from '../../services/axios';

interface IFormElement {
  type: string;
  placeholder?: string;
  id: string;
  name: string;
  span?: string;
  values?: string[];
  labels?: string[];
  required: boolean;
}

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  elements: IFormElement[];
  urlPath: string;
}

const Form: React.FC<IForm> = ({ elements, urlPath, ...rest }) => {
  const elementsState = useMemo(() => {
    return elements.reduce((acc, element) => {
      acc = { ...acc, [element.name]: '' }; //eslint-disable-line
      return acc;
    }, {});
  }, [elements]);

  const { setLoading } = useContext(LoadingContext);

  const schema = useMemo(() => {
    const shape = elements.reduce((final, current) => {
      let options;

      const { type, required } = current;

      if (required) {
        switch (type) {
          case 'number': {
            options = Yup.number()
              .typeError('Campo obrigatório.')
              .min(0, 'Menor número é 0.')
              .required('Campo obrigatório.');
            break;
          }
          case 'email': {
            options = Yup.string()
              .email('Entre um email válido.')
              .required('Campo obrigatório');
            break;
          }
          default: {
            options = Yup.string().required('Campo obrigatório.');
            break;
          }
        }
      } else {
        switch (type) {
          case 'number': {
            options = Yup.number().min(0, 'Menor número é 0.');
            break;
          }
          case 'email': {
            options = Yup.string().email('Entre um e-mail válido.');
            break;
          }
          default: {
            options = Yup.string();
            break;
          }
        }
      }

      final = { ...final, [current.name]: options }; //eslint-disable-line

      return final;
    }, {});

    return Yup.object().shape(shape);
  }, [elements]);

  const [formData, setFormData] = useState(elementsState);

  const [errors, setErrors] = useState(elementsState);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = event.currentTarget;

    setErrors({ ...errors, [name]: '' });

    const newValue = type === 'number' ? Number(value) : value;

    setFormData({ ...formData, [name]: newValue });
  }

  async function handleBlur(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type, required } = event.currentTarget;

    if (required && !value) {
      return setErrors({ ...errors, [name]: 'Campo obrigatório.' });
    }

    if (type === 'number') {
      try {
        const numberSchema = Yup.number()
          .typeError('Digite um número.')
          .min(0, 'Mínimo 0.');

        await numberSchema.validate(value);
      } catch (error) {
        return setErrors({ ...errors, [name]: error.message });
      }
    }

    if (type === 'email') {
      try {
        const emailSchema = Yup.string().email('Entre um e-mail válido.');

        await emailSchema.validate(value);
      } catch (error) {
        return setErrors({ ...errors, [name]: error.message });
      }
    }

    return true;
  }

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrors(elementsState);

    try {
      setLoading(true);
      await schema.validate(formData, { abortEarly: false });

      await api.post(urlPath, { ...formData });

      setFormData(elementsState);
      toast.success(
        urlPath === 'confirmation'
          ? 'Obrigado por confirmar.'
          : 'Obrigado pela mensagem.',
        {
          className: 'custom_success',
        },
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newState = error.inner.reduce(
          (acc: Record<string, unknown>, current: Yup.ValidationError) => {
            const { path, message } = current;

            acc = { ...acc, [path]: message }; //eslint-disable-line
            return acc;
          },
          {},
        );

        setErrors(newState);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <StyledForm {...rest} onSubmit={handleSubmit}>
      {elements.map(element => (
        <div key={element.id} className={`${element.type}_group`}>
          {element.type === 'radio' && (
            <>
              <span>{element.span}</span>
              {element.values?.map((value, index) => (
                <label key={value} htmlFor={value}>
                  <input
                    type={element.type}
                    name={element.name}
                    checked={value === formData[element.name]}
                    value={value}
                    id={value}
                    required={element.required}
                    onChange={handleChange}
                  />
                  {element.labels && element.labels[index]}
                </label>
              ))}
            </>
          )}

          {element.type === 'textarea' && (
            <TextArea
              id={element.id}
              name={element.id}
              rows={5}
              style={{ resize: 'none' }}
              placeholder={element.placeholder || ''}
              value={formData[element.name]}
              required={element.required}
              onChange={handleChange}
              isErrored={errors[element.name]}
            />
          )}

          {element.type !== 'textarea' && element.type !== 'radio' && (
            <Input
              type={element.type}
              name={element.name}
              id={element.id}
              placeholder={element.placeholder || ''}
              value={formData[element.name]}
              required={element.required}
              onChange={handleChange}
              onBlur={handleBlur}
              isErrored={errors[element.name]}
            />
          )}

          {errors[element.name] && (
            <span className="error_msg">{errors[element.name]}</span>
          )}
        </div>
      ))}

      <button type="submit">Enviar</button>
    </StyledForm>
  );
};

export default Form;
