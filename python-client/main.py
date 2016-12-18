#!/usr/bin/python

from __future__ import print_function
import serial
#firebase python wrapper: https://github.com/mikexstudios/python-firebase
from firebase import Firebase

f = Firebase('https://leon-first-firebase.firebaseio.com/data/force_array')

force_arr = []
with serial.Serial('/dev/ttyACM0', 9600, timeout=5) as ser:
    while True:
        line = ser.readline().strip()
        print("line:"+line)
        if len(force_arr) > 20:
            force_arr.pop(0)
        force_arr.append(line)
        f.put(force_arr)

print("finished!")
