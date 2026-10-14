print ( " hasnain " )

a = 67

b = 76

print ( a + b )

print ( a - b )

print ( a * b )

print ( a / b )

print ( a % b )

print ( a ** b )

print ( a // b )

print ( a > b )

print ( a < b )

print ( a == b )

print ( a != b )

print ( a >= b )

print ( a <= b )

print ( a and b )

print ( a or b )

print ( not a )

print ( not b )

print ( a & b )

print ( a | b )

print ( a ^ b )

print ( a >> 2 )

print ( a << 2 )

print ( a in [ 67, 53, 45 ] )

print ( a not in [ 67, 53, 45 ] )

print ( a is b )

print ( a is not b )

print ( a is 67 )

print ( a is not 67 )

print ( a is 76 )

print ( a is not 76 )

print ( a is 67 and b is 76 )

print ( a is 67 or b is 76 )

print ( a is 67 and b is 67 )

print ( a is 76 or b is 76 )

print ( a is 76 and b is 76 )

print ( a is 76 or b is 67 )  



letter = '''   Dear <|Name|>, \n
        You are selected for the position of <|position|>.
    \n<|Date|>
     \n<|company|> 
    \n Regrades,
    <|sender|> '''

print(letter.replace("<|Name|>", "Hasnain Mustafa")
            .replace("<|position|>", "Data Scientist")
            .replace("<|Date|>", "99th July 9999")
            .replace("<|company|>", "Aptech Metro")
            .replace("<|sender|>", "Sir Shazib"))

sentence = " Hello guys, whatsapp todays my topic is Haso"

print ( sentence.find ( "guys" ) )


sentence1 = " Hello guys, my name  is haso "

print ( sentence1.replace ( "  ", " "))


marks={

    "Hasnain" : 99,
    "Saji" : 98,
    "Salo" : 97
}

print(marks.keys())
print(marks.values())
print(marks.items())


s1= {5, 2, 6, 87,}
s2 = { 87, 45, 2, 6, 9 }

print( s1.union(s2) )
print ( s1.intersection(s2) )