package com.project1.service;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.project1.MainActivity;
import com.project1.MainApplication;

public class RunOnStartUpService extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
            Log.d("Test", "onReceive: running");
        if(intent.getAction().equals(Intent.ACTION_BOOT_COMPLETED)) {
            Log.d("Test", "onReceive: running");
            Intent i = new Intent(context, MainActivity.class);
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(i);
        }
    }
}
