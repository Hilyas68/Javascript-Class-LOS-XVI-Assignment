'use strict';

describe("Create a NoteApplication:", function() {
  var notesApplication;
  //var song;

  beforeEach(function() {
    notesApplication = new NotesApplication("Hassan");
    //song = new Song();
  });

  //it("should be able to create notes ", function() {
   // expect(notesApplication.createNotes("Blah")).toContain("Blah");
   // expect(notesApplication.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
   // expect(player).toBePlaying(song);
  //});

it("he is awesome", function(){
  expect(notesApplication.autor).toEqual("Hassan");
});


it("Create a method createNotes ", function(){
  
  spyOn(notesApplication,"createNotes");
  notesApplication.createNotes();
  expect(notesApplication.createNotes).toHaveBeenCalled();
});

it("listNotes should be called", function () {
      spyOn(notesApplication,"listNotes");
      notesApplication.listNotes();
      expect(notesApplication.listNotes).toHaveBeenCalled();
    }); 

it("get method should be called", function () {
      spyOn(notesApplication,"getNote_id");
      notesApplication.getNote_id(1);
      expect(notesApplication.getNote_id).toHaveBeenCalled();
    }); 

});


 