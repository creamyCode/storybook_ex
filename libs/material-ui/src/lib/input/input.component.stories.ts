// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { text, select, boolean, object } from '@storybook/addon-knobs'
import { InputModule } from './input.module'
import { FormControl, Validators } from '@angular/forms';


export default {
    title: 'FormField/Input',
    component: InputComponent,
    decorators: [
      moduleMetadata({
        imports: [
            BrowserAnimationsModule,
            InputModule,
            
        ]
      })
  ]
} as Meta;

export const 일반 = () => ({
    props: {
        label: text('label', '센서명'),
        placeholder: text('placeholder', '센서명을 입력하세요.'),
        type: select('type', ['text', 'number'], 'text'),
        required: boolean('required', false),
        readonly: boolean('readonly', false),
        form: new FormControl('sniper1')
    },
});

export const 필수값_설정 = () => ({
    props: {
        label: text('label', '포트'),
        placeholder: text('placeholder', '포트를 입력하세요.'),
        type: select('type', ['text', 'number'], 'number'),
        required: boolean('required', true),
        readonly: boolean('readonly', false),
        form: new FormControl(65535)
    },
});

export const 툴팁_설정 = () => ({
    props: {
        label: text('label', '포트'),
        placeholder: text('placeholder', '포트를 입력하세요.'),
        type: select('type', ['text', 'number'], 'number'),
        tooltip: text('tooltip', '1 ~ 65535값을 입력해주세요.'),
        required: boolean('required', true),
        readonly: boolean('readonly', false),
        form: new FormControl(65535),
    },
});

const disableForm = new FormControl(65535)
disableForm.disable();
export const 비활성화_설정 = () => ({
    props: {
        label: text('label', '포트'),
        placeholder: text('placeholder', '포트를 입력하세요.'),
        type: select('type', ['text', 'number'], 'number'),
        required: boolean('required', true),
        readonly: boolean('readonly', false),
        form: disableForm
    },
});

const invalidForm = new FormControl(65536, [Validators.min(0), Validators.max(65535)]);
invalidForm.markAsTouched();

export const 유효성에러 = () => ({
    props: {
        label: text('label', '포트'),
        placeholder: text('placeholder', '포트를 입력하세요.'),
        type: select('type', ['text', 'number'], 'number'),
        required: boolean('required', true),
        readonly: boolean('readonly', false),
        form: invalidForm,
        errMsgs: object('errMsgs', ['65535 이내로 입력해주세요.', '형식에 맞지 않습니다.'])
    },
});