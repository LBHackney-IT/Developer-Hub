import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

export function checkPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if (confirmPassword.length <= 0) {
        return null;
    }

    if (confirmPassword !== password) {
        // return {passwordsNotEqual: true};
        control.get('confirmPassword').setErrors({passwordsNotEqual: true});
    }
    return null;
}
