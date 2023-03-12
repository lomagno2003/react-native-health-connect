package dev.matinzd.healthconnect.records

import androidx.health.connect.client.aggregate.AggregationResult
import androidx.health.connect.client.records.IntermenstrualBleedingRecord
import androidx.health.connect.client.request.AggregateRequest
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableNativeMap

class ReactIntermenstrualBleedingRecord : ReactHealthRecordImpl<IntermenstrualBleedingRecord> {
  override fun parseWriteRecord(records: ReadableArray): List<IntermenstrualBleedingRecord> {
    TODO("Not yet implemented")
  }

  override fun parseRecord(record: IntermenstrualBleedingRecord): WritableNativeMap {
    TODO("Not yet implemented")
  }

  override fun getAggregateRequest(record: ReadableMap): AggregateRequest {
    TODO("Not yet implemented")
  }

  override fun parseAggregationResult(record: AggregationResult): WritableNativeMap {
    TODO("Not yet implemented")
  }
}
