#!/bin/sh
source /home/suntong/setup_LCG.sh
cd /lustre/collider/suntong/diagramC
#array=(1 2 3 4 5 6 7 8 9 10 20 30 40 50 60 70 80 90)
#array=(200 500 700 1000 1500 2000)
#array=(130 150 170)
array=(1 2 3 4 5 6 7 8 9 10 20 30 40 50 60 70 80 85 90 95 100 105 110 130 135)
for id in ${array[@]}
do
	mass=$(printf "%.3f" `echo "${id} * 0.001"|bc`)
	#width=$(printf "%.8f" `echo "$mass * 0.15183178"|bc`)
	width=$(printf "%.8f" `echo "$mass * 0.0241648"|bc`)
	mDM=$(printf "%.8f" `echo "$mass * 0.33333333"|bc`)
	echo $id
	#echo $mass
	#echo $width
	#echo $mDM
	bachfile="E8_${mass}GEV_file"
	cp batch_file $bachfile
	sed -i "s/mass/${mass}/g" $bachfile
	sed -i "s/width/${width}/g" $bachfile
	sed -i "s/RRR/${mDM}/g" $bachfile
	echo $bachfile
	./calchep_batch $bachfile
	wait
	gzip -d /lustre/collider/suntong/diagramC/batch_results/calchep_E8_${mass}GeV_ep1_10-single.lhe.gz
done
