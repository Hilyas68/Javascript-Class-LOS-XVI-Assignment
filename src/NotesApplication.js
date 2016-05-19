
function NotesApplication(autor) {

//var NotesApplication = function (autor) {
    this.autor = autor;
    this.notes = [];
 
  //function to create notes
  this.create = function(note_content){
    notes.push(note_content);  
  };

  //List notes
  this.listNotes = function(){

    for(var i = 0; i < notes.length; i++){
          
      //output the list
    console.log('Note ID: ' + i);
    
    console.log (notes[i]);
    
    console.log('By Author ' + autor);
    }
  
    
  };
  
  //get NoteID
  this.getNote_id = function(note_id){
    this.note_id = notes.indexOf(note_id);
    
   console.log('Showing results for search');
   console.log('Note ID: ' + this.note_id);
  
     console.log (this.note_content);
    
     console.log('By Author ' + autor);
  };
  
  this.search = function(search_text){
    this.search_text = notes.search(search_text);
    return this.search_text
  };
  
  this.delete = function(note_id){
    this.note_id = notes.indexOf(note_id);
    delete note_id;
  };    
  
  this.edit = function(note_id, new_content){
    this.note_id = notes.indexOf(note_content);
   notes[this.note_id] = new_content
  
};

}

//Contructor 
var info = new NotesApplication("HAssan", ["hass", "good", "better"]);
info.createNotes("Blah");
info.listNotes();

