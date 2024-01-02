/*

Input: string
-represents email data
-contains multiple emails, separated by delimiter ##||##
-each email message has 5 parts in order:
  -sender
  -subject
  -date
  -recipient
  -body
-parts are separated by #/#
Output: number
-represents the count/number of emails
earliest date received (lowest)
latest date received (highest)

Example:
var emailData =
"From: foo@bar.com#/#\n
Subject: Nunc in justo eros. Aliquam.#/#\n
Date: 07-27-2016#/#\n
To: foo@bar.com#/#\n
Etiam convallis commodo tortor, dapibus auctor dolor semper consequat.
Sed lobortis eros nec ante porta, eu placerat sapien interdum.
Class aptent taciti sociosqu ad litora torquent per conubia nostra,
per inceptos himenaeos. Morbi consectetur et odio vitae volutpat.
Curabitur imperdiet orci metus, et dignissim nisl lacinia non
Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum.
Quisque vel vulputate nisi. Nam a vestibulum turpis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie.
Cras eu lobortis libero. In rutrum non leo id ultricies.
Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\n

Data Structure:
-array of the different email parts -> array of just the dates

Algorithm:
-Split the input data into different emails
  -break on the ##||##\n\n
(have an array of email info)
-Transform the email string into the dates
  -split into the different parts #/#\n
  -filter, keep only what starts with 'Date:'
-Should have an array of dates
-Transform into new Date objects
  -replace the 'Date: ' with nothing
  -make a date object with that
(should have an array of Date Objects)
-find the earliest date (iterate through the dates compared to Date.now()
  to find the greatest difference)
-find the latest date (iterate through the dates compared to Date.now()
  to find the smallest difference)
*/

function findEarlyDate(array) {
  return array.reduce(function(earlyDate, currentDate) {
    if (earlyDate > currentDate) {
      return currentDate;
    } else {
      return earlyDate;
    }
  });
}

function findLateDate(array) {
  return array.reduce(function(lateDate, currentDate) {
    if (lateDate < currentDate) {
      return currentDate;
    } else {
      return lateDate;
    }
  });
}

function formatDate(date) {
  return new Date(date).toDateString();
}

function mailCount(emailData) {
  let emails = emailData.split(/##\|\|##\n\n/g);
  let email = emails.map(function(message) {
    return message.split(/#\/#\n/).filter(part => part.startsWith('Date: '));
  });

  let emailDates = email.map(function(dateArray) {
    let dateString = dateArray[0].replace('Date: ','');
    return dateString;
  });

  let earliestDate = findEarlyDate(emailDates);
  let latestDate = findLateDate(emailDates);

  console.log(`Count of Email: ${emailDates.length}`);
  console.log(`Date Range: ${formatDate(earliestDate)} - ${formatDate(latestDate)}`);
}

var emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\nEtiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean cursus velit non arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/#\nTo: qux@bar.com#/#\nNulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24-2016#/#\nTo: quux@foo.com#/#\nCurabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec nunc facilisis, ultricies.#/#\nDate: 07-03-2016#/#\nTo: garply@foo.com#/#\nFusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";


mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016