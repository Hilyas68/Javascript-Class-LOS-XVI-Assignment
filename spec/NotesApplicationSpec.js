'use strict';

describe("Create a NoteApplication:", function() {
  var notesApplication;
  //var song;

  beforeEach(function() {
    notesApplication = new NotesApplication("Hassan");
    //song = new Song();
  });


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

it("search method should be called", function () {
      spyOn(notesApplication,"search");
      notesApplication.search();
      expect(notesApplication.search).toHaveBeenCalled();
    });

it("delete method should be called", function () {
      spyOn(notesApplication,"delete");
      notesApplication.delete();
      expect(notesApplication.delete).toHaveBeenCalled();
    });

it("edit method should be called", function () {
      spyOn(notesApplication,"edit");
      notesApplication.edit();
      expect(notesApplication.edit).toHaveBeenCalled();
    });

it("search method should return a search value", function () {
      spyOn(notesApplication,"search");
      notesApplication.search();
      expect(notesApplication.search(this.search_text)).toEqual(this.search_text);
    });

});


 