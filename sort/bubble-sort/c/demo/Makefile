
CC = $(CROSS)gcc

EXEC = main

all: $(EXEC)

$(EXEC): $(EXEC).o bubble_sort.o

bubble_sort.o: ../bubble_sort.c
	$(CC)	-c -o $@ $<

.PHONY: clean
clean:
	@-rm -f $(EXEC) *.elf *.gdb *.o
