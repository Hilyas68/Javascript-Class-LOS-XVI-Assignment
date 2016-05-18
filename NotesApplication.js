var NotesApplication = function (autor) {
  this.autor = autor;
  
  //List/Array
	var notes = [];
 
  //function to create notes
  this.createNotes = function(note_content){
  	notes.append(this.note_content);	
  }
  //List notes
  this.listNotes = function(note_id , note_content, note_autor){
  	this.note_id = notes.indexOf(note_content);
  	this.note_content = notes[note_content];
  	this.note_autor = autor; 
  
  //output the list
  	console.log('Note ID: ' + this.note_id);
  	
  	console.log (this.note_content);
  	
  	console.log('By Author ' + autor);
  	
  }
  //get Note ID from a list
  this.getNote_id = function(note_id){
  	this.note_id = notes.indexOf(this.note_content);
  	
	 console.log('Showing results for search');
	 console.log('Note ID: ' + this.note_id);
  
  	 console.log (this.note_content);
  	
  	 console.log('By Author ' + autor);
  }
  
  //Searching for items list content 
  this.search = function(search_text){
  	this.search_text = notes.search(search_text);
  	return this.search_text
  }	
  
  //deleting item from the list
  this.delete = function(note_id){
  	this.note_id = notes.indexOf(note_content);
  	delete notes[this.note_id];
  }
  
  //editing a item list 
  this.edit = function(note_id, new_content){
  	this.note_id = notes.indexOf(note_content);
   notes[this.note_id] = new_content
  }
  
};

//Contructor 
var notes = new NotesApplication("");


