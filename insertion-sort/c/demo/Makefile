
CC = $(CROSS)gcc

EXEC = main

all: $(EXEC)

$(EXEC): $(EXEC).o insertion_sort.o

insertion_sort.o: ../insertion_sort.c
	$(CC)	-c -o $@ $<

.PHONY: clean
clean:
	@-rm -f $(EXEC) *.elf *.gdb *.o
