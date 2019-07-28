
CC = $(CROSS)gcc

EXEC = main

all: $(EXEC)

$(EXEC): $(EXEC).o selection_sort.o

selection_sort.o: ../selection_sort.c
	$(CC)	-c -o $@ $<

.PHONY: clean
clean:
	@-rm -f $(EXEC) *.elf *.gdb *.o
