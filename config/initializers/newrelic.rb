if defined?(NewRelic) && defined?(Puma)
  NewRelic::Agent.after_fork force_reconnect: true
end
