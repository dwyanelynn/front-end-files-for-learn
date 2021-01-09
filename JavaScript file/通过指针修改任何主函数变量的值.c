#include <stdio.h>

void fun(int * a)
{
    *a = 2;
}

int main()
{
    int b = 1;
    printf("b=%d", b);
    fun(&b);
    printf("b=%d", b);

}