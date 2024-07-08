import { Target } from './Target';

export class Goal {
	_id: string;
	name: string;
	description: string;
	progress: number;
	targets: Target[] = [];
	constructor(name: string, desc: string) {
		this.name = name;
		this.description = desc;
		this.progress = 0;
	}
	idGen(): string {
		throw new Error('Function not implemented.');
	}

	setTarget(target: Target) {
		this.targets.push(target);
	}
	getTargets(): Target[] {
		return this.targets;
	}
}
