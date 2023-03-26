import React from "react";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

import styles from "./Filters.module.scss";

const Filters = (props) => {
	const { filter: activeFilter = "all" } = useParams();

	return (
		<div>
			<ul className={classnames(styles["list"], styles["container"])}>
				<li className={classnames(styles["item"])}>
					<Link
						className={
							activeFilter === "all"
								? classnames(styles["btn"], styles["btn--active"])
								: classnames(styles["btn"])
						}
						to="/all"
					>
						{props.data.btnAll}
					</Link>
				</li>
				<li className={classnames(styles["item"])}>
					<Link
						className={
							activeFilter === "active"
								? classnames(styles["btn"], styles["btn--active"])
								: classnames(styles["btn"])
						}
						to="/active"
					>
						{props.data.btnActive}
					</Link>
				</li>
				<li className={classnames(styles["item"])}>
					<Link
						className={
							activeFilter === "completed"
								? classnames(styles["btn"], styles["btn--active"])
								: classnames(styles["btn"])
						}
						to="/completed"
					>
						{props.data.btnCompleted}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Filters;
