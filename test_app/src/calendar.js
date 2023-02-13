import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
};

LocaleConfig.defaultLocale = 'en';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Calendar
        markedDates={{
          '2022-05-16': { selected: true, marked: true, dotColor: 'red' },
          '2022-05-17': { marked: true, dotColor: 'red' },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CalendarScreen;
