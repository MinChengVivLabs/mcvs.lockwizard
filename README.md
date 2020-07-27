# Lock Wizard

## StructA is used to test continuation on result view
1. support single or list times
2. support HEF mode read-one
3. utterance "test result view with xxx [yyy, zzz, and ttt]" 

## TextCode is used to test voice selection of result-view list items
1. default "first one", "third one", "last one" etc should work
2. utterance "test selection result view"

## StructA is also used to test input prompt 
1. support text field input
2. support voice input
3. support conversation driver, utterance "default" after input promt
4. utterance "test input view" 

## StructD is used to test input promt with selection
1. support default "first one" type selection input
2. support user voice input other than selection choice
3. utterance "test selection input view [with xxx]" 

## StructB is historical for VBOS-6998 and SHOULD not be used in any training 
It should be ok or recommend to later remove StructB and related view models

## StructC is used to test followup 
1. followup without conversation driver
2. utterance "test follow up [double warpper]" 

## StructE is used for confirmation view test (for lock purpose only)
1. This is not a complete transcation, although StructE maybe re-used for that purpose later
2. utterance "test confirmation view" 

## TODO: add a test for basic audio player, 3nd version
NO need to be fancy, just play a default sound is fine

## TODO: add a test for basic video player, 3rd version

## TODO: add test transcation, later if required

