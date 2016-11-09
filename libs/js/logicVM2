// Class to represent a row in the contact grid
function contactRow(orderNum, uname, phone, email){
   		var self = this;
   		//alert(uname+" "+phone);
   	   self.orderNum = orderNum;
	   self.uname = uname;
       self.phone = phone;
       self.email = email;


} 



// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function ContactViewModel() {
	var self = this;

    self.contact = ko.observable({position:0, nom:"a", phone:"b", email:""});

	// Editable data
    self.contactsList = ko.observableArray([
        new contactRow(1, "Harold", "47680356", "harold@me.com")
    ]);


	// add contact
     self.addContact = function() {

     	alert(self.contact().nom);

     	//var n = self.contact().position+1;
     	//self.contact({position:n});
        self.contactsList.push(new contactRow(self.contact().position, self.contact().nom, self.contact().phone, self.contact().email));
        alert("size contactslist: "+self.contactsList()[1].nom);
        self.contact({nom:'', phone:'', email:''});
    }
    
    // remove contact
    self.removeContact = function(contactRow) { self.orderNum(self.orderNum()-1); self.contactsList.remove(contactRow) }
    
}

// Activates knockout.js
ko.applyBindings(new ContactViewModel());