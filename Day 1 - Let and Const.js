function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    const PI = Math.PI;
    const r =readLine();
    const area = parseFloat(PI * (r*r));
    console.log(area)
    // Print the perimeter of the circle:
    const perimeter = parseFloat(2 * PI * r);
    console.log(perimeter);