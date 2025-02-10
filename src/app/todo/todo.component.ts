import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, NgModule, OnInit, ViewChild } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { FormsModule, NgForm } from '@angular/forms'; 
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{

  ngOnInit(): void {
    this.fetchData();
}

@ViewChild("createTodoForm") todoForm!: NgForm;


todos$: Observable<any[]> | undefined;

updateData(todoId: string, newTitle: string, newDescription: string): void {
  const docRef = doc(this.fireStore, `todoapp/${todoId}`);

  updateDoc(docRef, {
    title: newTitle,
    description: newDescription
  }).then(() => {
    alert('Updated Successfully');
  }).catch((error) => {
    console.error("Error updating document:", error);
  });
}

deleteData(todoId: string): void { 
  const docRef = doc(this.fireStore, `todoapp/${todoId}` ); 

  deleteDoc(docRef) 
    .then(() => {
      alert(`${todoId} has been delete`)
    })
    .catch((error) => {
      console.error(error);
    })
}

//fetch data from firestore
fetchData(): void {
  const todoCollection = collection(this.fireStore, 'todoapp');
  this.todos$ = collectionData(todoCollection, { idField: 'id' });
}

//save data to firesto  re
fireStore:  Firestore = inject(Firestore);
saveData(): void { 
  const acollection = collection(this.fireStore, 'todoapp');
  addDoc(acollection, {
    'title' : this.todoForm.value.title,
    'description' : this.todoForm.value.description
  });
}

clearForm(): void { 
  this.todoForm.controls['title'].setValue('');
  this.todoForm.controls['description'].setValue('');
}

constructor() {}

submitForm(): void {
  if (this.todoForm) {
    alert('done submit')
    this.saveData(); 
    this.clearForm();
  } else {
    alert("Form not found!");
  }
}


}
