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


});


 