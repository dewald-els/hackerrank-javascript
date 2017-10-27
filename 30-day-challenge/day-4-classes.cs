class Person {
    public int age;     
	public Person(int initialAge) {
        // Add some more code to run some checks on initialAge
        if (initialAge < 0) {
            this.age = 0;
            Console.WriteLine("Age is not valid, setting age to 0.");
        } else {
            this.age = initialAge;
        }
     }
     public void amIOld() {
        // Do some computations in here and print out the correct statement to the console 
         string print = "";
        if (this.age < 13) {
            print = "You are young.";
        } else if (age >= 13 && age < 18){
            print = "You are a teenager.";
        } else {
            print = "You are old.";
        }
         Console.WriteLine(print);
     }

     public void yearPasses() {
        // Increment the age of the person in here
         this.age++;
     }
}