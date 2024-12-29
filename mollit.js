run = !tree || mod || pulse.changed(pulse.ADD_REM) || pulse.modified(_.key.fields) || pulse.modified(_.parentKey.fields); // prevent upstream source pollution
