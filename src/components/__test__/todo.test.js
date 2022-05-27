import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";

afterEach(() => {
  cleanup();
});

test("should render not completed todo component", () => {
  const todo = { id: 1, title: "Make Lunch", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Make Lunch");
  expect(todoElement).not.toContainHTML('<strike>');
});

test("should render completed todo component", () => {
  const todo = { id: 2, title: "Make dinner", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Make dinner");
  expect(todoElement).toContainHTML('</strike>');
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "Make Lunch", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
})
