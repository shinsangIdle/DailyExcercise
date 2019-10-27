module.exports.function = function manageGrade($vivContext, need) {
  const console = require('console');


  let http = require('http');
  var secret=require('secret');
  var apikey=secret.get('apikey');
  var baseUrl=secret.get('baseUrl');
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      'X-API-Key': apikey

    }
  };

  const bixbyUserId = $vivContext.userId;

  http.getUrl(baseUrl+"isExist&user_id=" + bixbyUserId,options);

  let action = "";
  let user_id = "&user_id=" + $vivContext.userId;

  console.log(user_id);

  action = "count_exercise_get_grade";
  //console.log(baseUrl+action+user_id);
  let user_data = http.getUrl(baseUrl + action + user_id, options);
  console.log("need: " + need);

  action = "manage_grade";
  let originalGrade = user_data[0].user_grade;
  let isValid = "no", afterGrade = originalGrade;
  let grades = ["초급", "중급", "고급"];

  if (need == "up") {
    if (originalGrade == 3) {
      isValid = "no";
    } else {
      isValid = "up";
      afterGrade++;
      let afterGradeParam = "&afterGrade=" + afterGrade;
      http.getUrl(baseUrl + action + user_id + afterGradeParam, options);
    }

  } else if (need == "down") {
    if (originalGrade == 1) {
      isValid = "no";
    } else {
      isValid = "down";
      afterGrade--;
      let afterGradeParam = "&afterGrade=" + afterGrade;
      http.getUrl(baseUrl + action + user_id + afterGradeParam, options);
    }
  }

  var resultManageGrade = { isValid: isValid, originalGrade: grades[originalGrade - 1], afterGrade: grades[afterGrade - 1] };
  console.log(resultManageGrade);
  return resultManageGrade;
}