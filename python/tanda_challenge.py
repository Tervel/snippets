"""
Entry for the Tanda QUT challenge
"""
import sys
import itertools
from itertools import groupby

def memoized(f):
    """ Memoization decorator for functions taking one or more arguments. """
    class memodict(dict):
        def __init__(self, f):
            self.f = f
        def __call__(self, *args):
            return self[args]
        def __missing__(self, key):
            ret = self[key] = self.f(*key)
            return ret
    return memodict(f)

def knapsack(items, maxweight):
    @memoized
    def bestvalue(i, j):
        if i == 0: return 0
        value, weight = items[i - 1]
        if weight > j:
            return bestvalue(i - 1, j)
        else:
            return max(bestvalue(i - 1, j),
                       bestvalue(i - 1, j - weight) + value)

    j = maxweight
    result = []

    for i in range(len(items), 0, -1):
        if bestvalue(i, j) != bestvalue(i - 1, j):
            result.append(items[i - 1])
            j -= items[i - 1][1]

    result.reverse()
    return bestvalue(len(items), maxweight), result


def main():
    """
    Main function
    """
    # (value, weight)
    items = [(9, 171), (8, 147), (8, 138), (7, 140), (4, 69),
             (4, 73), (6, 103), (5, 95), (5, 86), (4, 71)]
    maxweight = 800

    # sort by weight
    items.sort(key=lambda x: x[1])

    max_value = knapsack(items, maxweight)[0]

    for i in range(len(items)):
        temp_list = set(itertools.combinations(items, i)).copy()
        for j in range(len(temp_list)):
            valid_sack = knapsack(temp_list.pop(), maxweight)
            if valid_sack[0] >= max_value:
                print(str(valid_sack[0]) + ':' + str(sum(n for _, n in valid_sack[1])))

    print(groupeditems)

    return

if __name__ == "__main__":
    main()


