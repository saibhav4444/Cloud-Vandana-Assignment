import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Problem1 {
    public static void main(String[] args) {
        Integer[] arr = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = Arrays.asList(arr);
        Collections.shuffle(list);
        System.out.println("Shuffled Array: " + list);
    }
}
