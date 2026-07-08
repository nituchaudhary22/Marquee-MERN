let userAge = 21;
let hasLicense = true;
function userCanDriveOrNot(userAge, license) {
  if (userAge >= 18) {
    if (license === true) {
      console.log("Can drive");
    } else {
      console.log("Cannot drive");
    }
  } else {
    console.log("User Cannot drive");
  }
}
userCanDriveOrNot(25, true);   // Can drive
userCanDriveOrNot(25, false);  // Cannot drive
userCanDriveOrNot(16, true);   // User Cannot drive
userCanDriveOrNot(16, false);  // User Cannot drive