import React, {
  SyntheticEvent,
  ChangeEvent,
  FormHTMLAttributes,
  useState,
  useMemo,
} from 'react';
import * as Yup from 'yup';

import { StyledForm } from './styles';

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
}

const Form: React.FC<IForm> = ({ elements, ...rest }) => {
  const elementsState = elements.reduce((acc, element) => {
    acc = { ...acc, [element.name]: '' }; //eslint-disable-line
    return acc;
  }, {});

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
    const { name, value } = event.currentTarget;

    setErrors({ ...errors, [name]: '' });

    setFormData({ ...formData, [name]: value });
  }

  async function handleBlur(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type, required } = event.currentTarget;

    if (required && !value) {
      return setErrors({ ...errors, [name]: 'Campo obrigatório.' });
    }

    if (type === 'number') { //eslint-disable-line
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
      await schema.validate(formData, { abortEarly: false });
    } catch (err) {
      const newState = err.inner.reduce(
        (acc: Record<string, unknown>, current: Yup.ValidationError) => {
          const { path, message } = current;

          acc = { ...acc, [path]: message }; //eslint-disable-line
          return acc;
        },
        {},
      );

      setErrors(newState);
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
            <textarea
              id={element.id}
              name={element.id}
              rows={5}
              style={{ resize: 'none' }}
              placeholder={element.placeholder || ''}
              required={element.required}
              onChange={handleChange}
            />
          )}

          {element.type !== 'textarea' && element.type !== 'radio' && (
            <input
              type={element.type}
              name={element.name}
              id={element.id}
              placeholder={element.placeholder || ''}
              required={element.required}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}

          {errors[element.name] && <span>{errors[element.name]}</span>}
        </div>
      ))}

      <button type="submit">Enviar</button>
    </StyledForm>
  );
};

export default Form;
