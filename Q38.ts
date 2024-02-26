// Question 38


// Define the describe_city function with a default country value
function describe_city(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describe_city("Karachi", "Pakistan");
  describe_city("New York", "USA");
  describe_city("Paris"); // Uses the default country value