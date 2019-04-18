
CC = $(CROSS)gcc

EXEC = main

all: $(EXEC)

$(EXEC): $(EXEC).o bubble-sort.o

bubble-sort.o: ../bubble-sort.c
	$(CC)	-c -o $@ $<

.PHONY: clean
clean:
	@-rm -f $(EXEC) *.elf *.gdb *.o
