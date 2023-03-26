import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import classnames from "classnames";

import { removeTodo, toggleTodo } from "../../store/todos/todos-actions";
import { selectVisibleTodos } from "../../store/todos/todos-selectors";

import styles from "./TodoList.module.scss";

const TodoList = () => {
	const dispatch = useDispatch();
	const { filter } = useParams();
	const todos = useSelector((state) => selectVisibleTodos(state, filter));

	return (
		<ul className={classnames(styles["list"])}>
			{todos.map((todo) => (
				<li className={classnames(styles["item"])} key={todo.id}>
					<p className={classnames(styles["text"])}>{todo.title}</p>
					<div className={classnames(styles["box"])}>
						<input
							className={classnames(styles["custom-checkbox"])}
							type="checkbox"
							name={todo.id}
							id={todo.id}
							checked={todo.completed}
							onChange={() => dispatch(toggleTodo(todo.id))}
						/>
						<label htmlFor={todo.id}></label>
						<button
							className={classnames(styles["btn"])}
							onClick={() => dispatch(removeTodo(todo.id))}
						></button>
					</div>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
