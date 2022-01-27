var selectedRow = null

function onFormSubmit() {
      if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
           insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
     }
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["emailId"] = document.getElementById("emailId").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["password"] = document.getElementById("password").value;
    formData["cpassword"] = document.getElementById("cpassword").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("SignUpData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emailId;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mobile;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.password;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cpassword;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

   function resetForm() {
       document.getElementById("firstName").value = "";
       document.getElementById("lastName").value = "";
       document.getElementById("emailId").value = "";
       document.getElementById("mobile").value = "";
       document.getElementById("password").value = "";
       document.getElementById("cpassword").value = "";


       selectedRow = null;
   }

   function onEdit(td) {
       selectedRow = td.parentElement.parentElement;
       document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
       document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
       document.getElementById("emailId").value = selectedRow.cells[2].innerHTML;
       document.getElementById("mobile").value = selectedRow.cells[3].innerHTML;
       document.getElementById("password").value =  selectedRow.cells[4].innerHTML;
       document.getElementById("cpassword").value =  selectedRow.cells[5].innerHTML;
   }
   function updateRecord(formData) {
       selectedRow.cells[0].innerHTML = formData.firstName;
       selectedRow.cells[1].innerHTML = formData.lastName;
       selectedRow.cells[2].innerHTML = formData.emailId;
       selectedRow.cells[3].innerHTML = formData.mobile;
       selectedRow.cells[4].innerHTML = formData.password;
       selectedRow.cells[5].innerHTML = formData.cpassword;
    }

   function onDelete(td) {
       if (confirm('Are you sure to delete this record ?')) {
           row = td.parentElement.parentElement;
           document.getElementById("SignUpData").deleteRow(row.rowIndex);
       }
   }
    function validate() {
     isValid = true; 
     
       if(document.getElementById("firstName").value == "") {
         isValid = false;
          document.getElementById("firstNameValidationError").classList.remove("hide");
        } else {
         isValid = true;
         if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
             document.getElementById("firstNameValidationError").classList.add("hide");
       }
        if(document.getElementById("emailId").value == "") { 
            isValid = false;
             document.getElementById("emailValidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("emailValidationError").classList.contains("hide"))
                document.getElementById("emailValidationError").classList.add("hide");
        }
        if(document.getElementById("mobile").value == "") {
            isValid = false;
             document.getElementById("mobileValidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("mobileValidationError").classList.contains("hide"))
                document.getElementById("mobileValidationError").classList.add("hide");
        }
        if(document.getElementById("password").value == "") {
            isValid = false;
             document.getElementById("passwordValidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("passwordValidationError").classList.contains("hide"))
                document.getElementById("passwordValidationError").classList.add("hide");
        }
        if(document.getElementById("cpassword").value == "") {
            isValid = false;
             document.getElementById("cpasswordValidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("cpasswordValidationError").classList.contains("hide"))
                document.getElementById("cpasswordValidationError").classList.add("hide");
        }
        
        return isValid;
 
     
    }      
