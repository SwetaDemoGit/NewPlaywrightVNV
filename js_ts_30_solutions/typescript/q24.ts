// Q24. Library Members
class Member {
  private borrowedBooks: number = 0;

  borrow(): void {
    this.borrowedBooks++;
  }

  returnBook(): void {
    if (this.borrowedBooks > 0) {
      this.borrowedBooks--;
    } else {
      console.log("No borrowed books to return");
    }
  }

  getBorrowedCount(): number {
    return this.borrowedBooks;
  }
}

const member = new Member();
member.borrow();
member.borrow();
member.returnBook();

console.log(member.getBorrowedCount());
