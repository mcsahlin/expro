import React from 'react';
import './Container.scss';

interface ContainerProps {
	cl: string;
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ cl, children }) => {
	return <div className={`container ${cl}`}>{children}</div>;
};

export default Container;
