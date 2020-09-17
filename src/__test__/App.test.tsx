import React from 'react';
import { render, wait } from '@testing-library/react';
import App from '../App';
import LOCALSTORAGE_CONSTANT from '../constants/localStorageConstants'
import ListMock from './mocks/todoMock.json'

test('renders Top Header', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/top-header/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Top Header Title Check', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/top-header/);
  expect(linkElement.textContent).toStrictEqual('Todo App')
});

test('renders Input TextField', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/todo-input-field/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Input TextField check Placeholder text', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/todo-input-field/);
  expect(linkElement.placeholder).toStrictEqual('Enter your todo here')
});

test('renders Add Button', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/add-Button/);
  expect(linkElement).toBeInTheDocument();
});

test('renders check Button text', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/add-Button/);
  expect(linkElement.textContent).toStrictEqual('Add')
});

test('renders List Header', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/list-header/);
  expect(linkElement).toBeInTheDocument();
});

test('renders List Header Title Check', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/list-header/);
  expect(linkElement.textContent).toStrictEqual('Todo List')
});

test('check List Updation on Adding Todos', () => {
  const testTodo = `Test${Math.random()}`
  const { getByTestId,getByText } = render(<App />);
  const input = getByTestId(/todo-input-field/);
  input.textContent = testTodo
  const button = getByTestId(/add-Button/);
  button.click()
  wait();
  const text = getByText(testTodo)
  expect(text.textContent).toStrictEqual(testTodo)
});

test('check List Updation on Adding Todos', () => {
  const testTodo = `Test${Math.random()}`
  const { getByTestId,getByText } = render(<App />);
  const input = getByTestId(/todo-input-field/);
  input.textContent = testTodo
  const button = getByTestId(/add-Button/);
  button.click()
  wait();
  const text = getByText(testTodo)
  expect(text.textContent).toStrictEqual(testTodo)
});

test('check List Updation on Adding Todos', () => {
  const testTodo = `Test${Math.random()}`
  const { getByTestId,getByText } = render(<App />);
  const input = getByTestId(/todo-input-field/);
  input.textContent = testTodo
  const button = getByTestId(/add-Button/);
  button.click()
  wait();
  const text = getByText(testTodo)
  expect(text.textContent).toStrictEqual(testTodo)
});

test('check Striking of Todo List',  () => {
  window.localStorage.setItem(LOCALSTORAGE_CONSTANT.TODO_LIST, JSON.stringify(ListMock));
  const {getByText } = render(<App />);
  const labeltext = getByText(/asdasd/);
  labeltext.click()
  wait();
  expect(labeltext.className).toContain('strikeText')
});

// test('check unStriking of Todo List',  async () => {
//   window.localStorage.setItem(LOCALSTORAGE_CONSTANT.TODO_LIST, JSON.stringify(ListMock));
//   const {getByText } = render(<App />);
//   const labeltext = getByText(/akj/);
//   // console.log(labeltext.className)
//   labeltext.click()
//   // await wait(3)
//   // console.log(labeltext.className)
//   expect(labeltext.className).not.toContain('strikeText')
// });
