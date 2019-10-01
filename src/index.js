/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(preferences, knowsProgramming, config) {

    if (knowsProgramming) {                                            //условие знает ли ученик программирование
        for (let key in config) {                                      //цикл перебора каждого key в config
            if (preferences === key) {                                 //условие
                return Math.ceil(800/config[key]);                  //возвращаем значение округлённое в большую сторону (т.к. неделя не может быть округлена в
                                                                       //меньшую сторону) при каком приоритете ученик потратит 800 часов в неделю и выучит
            }
        }
    }

    else {
        for (let key in config) {                                      //цикл перебора каждого key в config
            if (preferences === key) {                                 //условие
                return Math.ceil(1300/config[key]);                 //возвращаем значение округлённое в большую сторону (т.к. неделя не может быть округлена в
                                                                       //меньшую сторону) при каком приоритете ученик потратит 800 часов в неделю и выучит
            }
        }
    }

  };
  