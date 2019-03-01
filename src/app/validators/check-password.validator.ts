import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
// export function checkPassword(password: string): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } | null => {
//         const confirmPassword = control.v;
//         return password === confirmPassword ? null : {'passwordsDoNotMatch': 'Passwords Do Not Much'};
//     };
// }

export function checkPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if (confirmPassword.length <= 0) {
        console.log('less than 0');
        return null;
    }

    if (confirmPassword !== password) {
        console.log('not match');
        // return {passwordsNotEqual: true};
        control.get('confirmPassword').setErrors({passwordsNotEqual: true});
    }
    console.log('null');
    return null;
}
