import { Goal } from './Goal';
import { Step } from './Step';

export class Target {
	_id: string = '';
	parent: Goal;
	name: string;
	steps: Step[] = [];
	progress: number = NaN;

	constructor(parent: Goal, name: string) {
		this.parent = parent;
		this.name = name;
	}

	setSteps(step: Step) {
		return this.steps.push(step);
	}
}
