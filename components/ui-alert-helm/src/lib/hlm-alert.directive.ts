import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const alertVariants = cva(
	'relative w-full rounded-lg border-2 border-border p-4 [&>[hlmAlertIcon]]:absolute [&>[hlmAlertIcon]]:text-foreground [&>[hlmAlertIcon]]:left-4 [&>[hlmAlertIcon]]:top-4 [&>[hlmAlertIcon]+div]:translate-y-[-3px] [&>[hlmAlertIcon]~*]:pl-7',
	{
		variants: {
			variant: {
				default: 'border-black/50 bg-background text-foreground',
				error:
					'text-destructive border-destructive/50 dark:border-destructive/50 [&>[hlmAlertIcon]]:text-destructive text-destructive',
				info: 'text-accent border-accent/50 dark:border-accent/50 [&>[hlmAlertIcon]]:text-accent text-accent'
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);
export type AlertVariants = VariantProps<typeof alertVariants>;

@Directive({
	selector: '[hlmAlert]',
	standalone: true,
	host: {
		role: 'alert',
		'[class]': '_computedClass()',
	},
})
export class HlmAlertDirective {
	private readonly _userCls = signal<ClassValue>('');
	@Input()
	set class(userCls: ClassValue) {
		this._userCls.set(userCls);
	}

	private readonly _variant = signal<AlertVariants['variant']>('default');
	@Input()
	set variant(variant: AlertVariants['variant']) {
		this._variant.set(variant);
	}

	protected _computedClass = computed(() => this._generateClass());
	private _generateClass() {
		return hlm(alertVariants({ variant: this._variant() }), this._userCls());
	}
}
