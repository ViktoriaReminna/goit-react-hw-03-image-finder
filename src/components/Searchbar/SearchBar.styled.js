import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 400px; /* Змінив максимальну ширину форми */
  margin: 0 auto; /* Вирівнювання по центру */

  position: relative;

  margin-bottom: 20px; /* Змінив відступи */
`;

export const Input = styled.input`
  width: 100%;
  height: 40px; /* Змінив висоту інпута */

  border: none;
  border-bottom: 1px solid #000; /* Змінив стиль границі */
  background-color: transparent;

  padding: 8px;
  padding-right: 40px; /* Змінив правий відступ для кнопки */
  outline: none;

  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s; /* Змінив анімацію */

  font-size: 16px; /* Змінив розмір шрифту */
  color: #000; /* Змінив колір тексту */
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
  }
`;

export const InputBtn = styled.button`
  width: 40px; /* Змінив ширину кнопки */
  height: 40px; /* Змінив висоту кнопки */

  font-size: 16px; /* Змінив розмір шрифту */
  font-weight: bold;
  color: #000; /* Змінив колір тексту */

  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
