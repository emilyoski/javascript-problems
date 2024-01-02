function testAtSign(email) {
  let regex = /@/g;
  return regex.test(email) && (email.indexOf('@') === email.lastIndexOf('@'));
}

function testLocal(email) {
  let regex = /[^A-Za-z0-9]/g;
  return !(regex.test(email.split('@')[0]));
}

function testDomain(email) {
  let regex = /[^A-Za-z]/g;
  let domain = email.split('@')[1].split('.');

  if (domain.includes('') || domain.length < 2) {
    return false;
  }

  return domain.every(word => (!regex.test(word)));
}

function isValidEmail(email) {
  let result = !!(testAtSign(email) && testLocal(email) && testDomain(email));
  console.log(result);
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false