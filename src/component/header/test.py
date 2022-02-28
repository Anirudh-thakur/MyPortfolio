test = int(input())
count = 1
while count <= test:
    NABC = input().split(" ")
    N = int(NABC[0])
    A = int(NABC[1])
    B = int(NABC[2])
    C = int(NABC[3])
    if A == 1 and B == 1 and C == 1 and N != 1:
        print("Case #{}: IMPOSSIBLE".format(count))
    else:
        kachra = N - (A + B - C)
        if kachra < 0:
            print("Case #{}: IMPOSSIBLE".format(count))
        else:
            if B != 1:
                res = []
                for i in range(A-C):
                    res.append(N-1)
                res.append(N)
                for i in range(kachra):
                    res.append(1)
                for i in range(C-1):
                    res.append(N)
                for i in range(B-C):
                    res.append(N-1)
                to_print = " ".join(str(v) for v in res)
                print("Case #{}: {}".format(count, to_print))
            else:
                res = []
                for i in range(A-C):
                    res.append(N-1)
                for i in range(kachra):
                print("Case #{}: {}".format(count, to_print))
    count += 1
           res.append(1)
                for i in range(C-1):
                    res.append(N)
                res.append(N)
                for i in range(B-C):
                    res.append(N-1)
                to_print = " ".join(str(v) for v in res)
         