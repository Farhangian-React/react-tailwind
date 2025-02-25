import React, { useState } from "react";

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);

	const handleClick = (e, newActiveTab) => {
		e.preventDefault();
		setActiveTab(newActiveTab);
	};

	return (
		<div className="w-full mx-auto">
			<div className="flex w-1/2  lg:w-1/4 px-0  ">
				{children.map((child) => (
					<button 
						key={child.props.label}
						className={`${
							activeTab === child.props.label
								? "border-b-4 border-orange-800 "
								: ""
						} flex-1 text-orange-800 text-sm file: lg:text-lg font-medium py-2` }
						onClick={(e) => handleClick(e, child.props.label)}
					>
						{child.props.label}
					</button>

					
				))}
			</div>
			<div className="py-4">
				{children.map((child) => {
					if (child.props.label === activeTab) {
						return <div key={child.props.label}>{child.props.children}</div>;
					}
					return null;
				})}
			</div>
		</div>
	);
};

const Tab = ({ label, children }) => {
	return (
		<div label={label} className="hidden">
			{children}
		</div>
	);
};
export { Tabs, Tab };