// Class to represent a row in the contact grid
function contactRow(orderNum, uname, phone, email){
   		var self = this;
   	   self.orderNum = orderNum;
	   self.uname = uname;
       self.phone = phone;
       self.email = email;


} 



// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function ContactViewModel() {

	var self = this;

	   self.funame = ko.observable("");
       self.fphone = ko.observable("");
       self.femail = ko.observable("");
       self.orderNum = ko.observable(1);

	// Editable data
    self.contacts = ko.observableArray([
        new contactRow(1, "Harold", "47680356", "harold@me.com")
    ]);


	// add contact
     self.addContact = function() {

     	self.orderNum(self.orderNum()+1);
        self.contacts.push(new contactRow(self.orderNum(), self.funame(), self.fphone(), self.femail()));
        this.funame("");
        this.fphone("");
        this.femail("");
    }
    
    // remove contact
    self.removeContact = function(contactRow) { self.orderNum(self.orderNum()-1); self.contacts.remove(contactRow) }
    
}

// Activates knockout.js
ko.applyBindings(new ContactViewModel());