export class Regx {
  static Firstname(control) {
    let regx = /^[a-zA-Z\-]+$/;
    let valid = regx.test(control.value);
    return valid ? null : { firstname: true };
  }
  static Password(control) {
    //Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    let regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

    let valid = regx.test(control.value);
    return valid ? null : { password: true };
  }
  static Email(control) {
    let regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = regx.test(control.value);
    return valid ? null : { email: true };
  }
  static Lastname(control) {
    let regx = /^[a-zA-Z\-]+$/;
    let valid = regx.test(control.value);
    return valid ? null : { firstname: true };
  }

  static ContactNo(control) {
    let regx = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    let valid = regx.test(control.value);
    return valid ? null : { firstname: true };
  }
  static Country(control) {
    let regx = /^[a-zA-Z\-]+$/;
    let valid = regx.test(control.value);
    return valid ? null : { firstname: true };
  }
  static DOB(control) {
    let regx = /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$/;
    let valid = regx.test(control.value);
    return valid ? null : { firstname: true };
  }
}
