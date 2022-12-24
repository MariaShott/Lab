import json
import functools
import random as rd


class Solution:
    def sum_number_in_string(self, number_string: str) -> int:
        sum = 0;
        for i in range(len(number_string)):
            int_chislo = int(number_string[i]);
            sum += int_chislo;
            print(sum);

    def get_leader_string(self, steps: int) -> str:
        for a in range(1, steps+1):
            print(str(a) + " " * (steps - a) + '#' * a);

    def to_json(self, func):
            @functools.wraps(func)
            def wrapper(*args, **kwargs):
                return json.dumps(func(*args, **kwargs));
                return wrapper;

if __name__ == '__main__':
    solution = Solution();
    solution.sum_number_in_string('12345');
    solution.sum_number_in_string('160438521039');
    print(solution.get_leader_string(3));
    print(solution.get_leader_string(5));

    @solution.to_json
    def get_data():
        return {
        'data': 42
    }

    get_data();
