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
  notesApplication.createNotes();
  spyOn(notesApplication,"createNotes");
  expect(notesApplication.createNotes).toHaveBeenCalled();
});

it("listNotes should be called", function () {
      spyOn(note_application,"listNotes");
      note_application.listNotes();
      expect(note_application.listNotes).toHaveBeenCalled();
    }); 

it("get method should be called", function () {
      spyOn(note_application,"get");
      note_application.get(1);
      expect(note_application.get).toHaveBeenCalled();
    }); 

});


 