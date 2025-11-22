import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Random random = new Random();

    int numberToGuess = random.nextInt(100) + 1; // 1-100
    int attempts = 0;
    int maxAttempts = 10; // optional limit
    boolean hasWon = false;

    System.out.println("Welcome to the Number Guessing Game!");
    System.out.println("Guess the number between 1 and 100.");

    while(attempts < maxAttempts) {
    System.out.print("Enter your guess: ");
    int userGuess = scanner.nextInt();
    attempts++;

    if(userGuess == numberToGuess) {
    hasWon = true;
    break;
} else if(userGuess < numberToGuess) {
    System.out.println("Too low! Try again.");
} else {
    System.out.println("Too high! Try again.");
}
}

if(hasWon) {
    System.out.println("Congratulations! You guessed the number in " + attempts + " attempts.");
} else {
    System.out.println("Sorry! The number was " + numberToGuess + ". Better luck next time!");
}

scanner.close();
}
}
